import { NextResponse } from 'next/server';
import { PROJECTS_ENDPOINT, PROJECT_MEMBERS_ENDPOINT } from '@/config';
import { constructURL } from '@/server/services';
import ky from 'ky';

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const projectId = url.searchParams.get('projectId');

    let endpoint = constructURL(PROJECTS_ENDPOINT, { membership: true });

    if (projectId) {
      endpoint = constructURL(PROJECT_MEMBERS_ENDPOINT(projectId));
    }

    const response = await ky(endpoint).json();

    return NextResponse.json(response);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
