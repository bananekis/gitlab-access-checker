import { ACCESS_TOKEN, BASE_URL } from '@/config';
import { User } from '@/types';
import { getGroupMembers, getGroups, getProjectMembers, getProjects } from './gitlabApi';
import { processMembers } from '@/utils';
import ky from 'ky';

export const constructURL = (endpoint: string, params = {}) => {
  const queryString = new URLSearchParams({ ...params, access_token: ACCESS_TOKEN }).toString();
  return `${BASE_URL}${endpoint}?${queryString}`;
};

export const fetchAPI = async <T>(apiUrl: string): Promise<T[]> => {
  try {
    return await ky(process.env.URL + apiUrl).json();
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
};

export const fetchUserData = async () => {
  const fetchGroupsPromise = getGroups();
  const fetchProjectsPromise = getProjects();

  const [groups, projects] = await Promise.all([fetchGroupsPromise, fetchProjectsPromise]);

  const projectMembersPromises = projects.map((project) => getProjectMembers(project.id));
  const groupMembersPromises = groups.map((group) => getGroupMembers(group.id));

  // Fetch project and group members concurrently
  const [projectMembersData, groupMembersData] = await Promise.all([
    Promise.all(projectMembersPromises),
    Promise.all(groupMembersPromises),
  ]);

  const userDataMap: User[] = [];

  // Combine project members data
  projectMembersData.forEach((projectMembers, index) => {
    processMembers(userDataMap, projectMembers, projects[index].path_with_namespace);
  });

  // Combine group members data
  groupMembersData.forEach((groupMembers, index) => {
    processMembers(userDataMap, groupMembers, undefined, groups[index].full_path);
  });

  // Convert the map to an array and update state
  const users = Object.values(userDataMap);

  return users;
};
