import { GitLabGroup, GitLabProject, Member } from '@/types';
import { fetchAPI } from './services';

export async function getGroups(): Promise<GitLabGroup[]> {
  const apiUrl = `/api/groups`;
  return fetchAPI(apiUrl);
}

export async function getGroupMembers(id: number | string): Promise<Member[]> {
  const apiUrl = `/api/groups?groupId=${id}`;
  return fetchAPI(apiUrl);
}

export async function getProjects(): Promise<GitLabProject[]> {
  const apiUrl = `/api/projects`;
  return fetchAPI(apiUrl);
}

export async function getProjectMembers(id: number | string): Promise<Member[]> {
  const apiUrl = `/api/projects?projectId=${id}`;
  return fetchAPI(apiUrl);
}
