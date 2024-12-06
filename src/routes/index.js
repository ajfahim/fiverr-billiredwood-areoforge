import express from 'express';
import { MailingListRoutes } from '../modules/mailing_list/mailing_list.route.js';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/mailing-list',
    route: MailingListRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
