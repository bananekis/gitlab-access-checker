import { Member, User } from '@/types';
import { accessLevelMap } from '@/config';

export const processMembers = (
  userDataMap: User[],
  members: Member[],
  projectPath?: string,
  groupPath?: string
) => {
  members.forEach(({ id, name, username, access_level }) => {
    const user = userDataMap[id];
    const newUser: User = {
      name,
      username,
      groups: [],
      projects: [],
    };
    const accessLevel = accessLevelMap[access_level];

    userDataMap[id] = {
      ...(user || newUser), // Ensure user exists in map
      projects: projectPath
        ? [...(user?.projects || []), `${projectPath} (${accessLevel})`]
        : user?.projects || [], // Add project if provided
      groups: groupPath
        ? [...(user?.groups || []), `${groupPath} (${accessLevel})`]
        : user?.groups || [], // Add group if provided
    };
  });
};
