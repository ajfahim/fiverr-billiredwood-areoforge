import express from 'express';
import validateRequest from '../../middlewares/validateRequest.js';
import { MailingListController } from './mailing_list.controller.js';
import { MailingListValidation } from './mailing_list.validation.js';

const router = express.Router();

router.post(
  '/',
  validateRequest(MailingListValidation.createMailingListValidationSchema),
  MailingListController.postMail,
);
export const MailingListRoutes = router;
