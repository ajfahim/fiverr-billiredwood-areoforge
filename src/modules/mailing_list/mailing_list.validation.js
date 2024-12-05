import { z } from 'zod';

const createMailingListValidationSchema = z.object({
  body: z.object({
    email: z.string().email({
      invalid_type_error: 'Provided value is not a valid email',
      required_error: 'Email is required',
    }),
  }),
});

export const MailingListValidation = {
  createMailingListValidationSchema,
};
