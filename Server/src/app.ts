import express, { Application } from 'express';
import cors from 'cors';
import { AuthRoute } from './app/module/Auth/auth.route';
import { UserRoute } from './app/module/User/user.route';
import notFound from './app/middlewares/notFound';
import { ServiceRoute } from './app/module/Service/service.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { PCategoryRoute } from './app/module/parent_category/parent_category.route';
import { ServiceCategoryRoute } from './app/module/service_category/serviceCategory.route';
import { OrderRoutes } from './app/module/Order/order.route';
import { ChatRoute } from './app/module/Chat/chat.route';

const app: Application = express();
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/auth', AuthRoute);
app.use('/api/user', UserRoute);
app.use('/api/service', ServiceRoute);
app.use('/api/pcategory', PCategoryRoute);
app.use('/api/scategory', ServiceCategoryRoute);
app.use('/api/order', OrderRoutes);
app.use('/api/chat', ChatRoute);

app.get('/', (req, res) => {
  res.send('Hello from JustKaaj Server');
});

//middlewares
app.use(notFound);
app.use(globalErrorHandler);
export default app;
