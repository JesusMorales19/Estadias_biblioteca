
import { Router } from "express";
import { UserControllers, BookControllers, ClientControllers, CategoryControllers, OpinionControllers, LoanControllers } from "../controllers/controllers.js";

const router = Router();

//User Routes
router.post("/login/user", UserControllers.login)
router.post("/register/user", UserControllers.registerUser);
router.put("/delete/user/:code", UserControllers.deleteUser);
router.delete("deleteF/user/:code", UserControllers.deleteUserF)

//Books Routes
router.post("/register/book", BookControllers.registerBook);
router.put("/delete/book/:code", BookControllers.deleteBook);
router.put("/recover/book/:code", BookControllers.recoverBook);
router.delete("/deleteF/book/:code", BookControllers.deleteBookF);

//Clients Routes
router.post("/register/client", ClientControllers.registerClient);
router.put("/delete/client/:code", ClientControllers.deleteClient);
router.put("/update/client/:code", ClientControllers.updateClient);
router.put("/recover/client/:code", ClientControllers.recoverClient);
router.delete("/deleteF/client/:code", ClientControllers.deleteClientF)
router.get("/get/client/:code", ClientControllers.getClient);

//Loans Routes
router.post("/register/loan", LoanControllers.registerLoans);
router.post("/return/loan/:idLoan", LoanControllers.returnLoan);

//Opinions Routes
router.post("/register/opinion", OpinionControllers.registerOpinion);

//Categorys Routes
router.post("/register/category", CategoryControllers.registerCategory);

export default router;