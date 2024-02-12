import { GROUPS_ENDPOINT, GROUP_MEMBERS_ENDPOINT, accessLevelMap } from '@/config';
import { Member } from '@/types';
import { NextResponse } from 'next/server';
import { constructURL } from '@/server/services';
import ky from 'ky';

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const groupId = url.searchParams.get('groupId');

    // see accessLevelMap for more
    const min_access_level: Member['access_level'] = 30;

    let endpoint = constructURL(GROUPS_ENDPOINT, { min_access_level });

    if (groupId) {
      endpoint = constructURL(GROUP_MEMBERS_ENDPOINT(groupId));
    }

    const response = await ky(endpoint).json();

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
