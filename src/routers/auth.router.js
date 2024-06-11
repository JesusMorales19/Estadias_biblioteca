
import { Router } from "express";
import { UserControllers, BookControllers, ClientControllers } from "../controllers/controllers.js";

const router = Router();

//User Routes
router.post("/login/user", UserControllers.login)
router.post("/register/user", UserControllers.registerUser);
router.delete("/delete/user/:code", UserControllers.deleteUser)



//Books Routes
router.post("/register/book", BookControllers.registerBook);
router.put("/delete/book/:code", BookControllers.deleteBook);
router.put("/recover/book/:code", BookControllers.recoverBook);
router.delete("/deleteF/book/:code", BookControllers.deleteBookF);

//Clients Routes
router.post("/register/client", ClientControllers.registerClient);
router.put("/delete/client/:code", ClientControllers.deleteClient);
router.put("/update/client/:code", ClientControllers.updateClient);
router.get("/get/client/:code", ClientControllers.getClient);

export default router;