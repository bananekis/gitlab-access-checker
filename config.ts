import { Member } from './types';

export const BASE_URL = 'https://gitlab.com/api/v4/';
export const ACCESS_TOKEN = process.env.GITLAB_ACCESS_TOKEN || '';

// Endpoint paths
export const GROUPS_ENDPOINT = 'groups';

export const PROJECTS_ENDPOINT = `projects`;

export const GROUP_MEMBERS_ENDPOINT = (groupId: string | number) =>
  `${GROUPS_ENDPOINT}/${groupId}/members`;

export const PROJECT_MEMBERS_ENDPOINT = (projectId: string | number) =>
  `projects/${projectId}/members`;

// The roles assigned to a user or group
export const accessLevelMap: {
  [key in Member['access_level']]: string;
} = {
  0: 'No Access',
  5: 'Minimal Access',
  10: 'Guest',
  20: 'Reporter',
  30: 'Developer',
  40: 'Maintainer',
  50: 'Owner',
};
