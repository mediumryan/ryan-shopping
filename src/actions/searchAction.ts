'use server';

import { ZodError, z } from 'zod';

export async function searchAction(
  previousState: any,
  formData: FormData
): Promise<any> {
  previousState = null;

  return { message: 'hi' };
}
