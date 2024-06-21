
import { Router } from "express";
import { UserControllers, BookControllers, ClientControllers, CategoryControllers, OpinionControllers, LoanControllers, LossControllers, DonationControllers, ConsultControllers } from "../controllers/controllers.js";
import authMiddleware from "../middleware/validate.middleware.js";

const router = Router();

//User Routes
router.post("/login/user", UserControllers.login)
router.post("/register/user", UserControllers.registerUser);
router.put("/delete/user/:code", authMiddleware, UserControllers.deleteUser);
router.delete("deleteF/user/:code", authMiddleware, UserControllers.deleteUserF)

//Books Routes
router.post("/register/book", BookControllers.registerBook);
router.put("/delete/book/:code", BookControllers.deleteBook);
router.put("/recover/book/:code", BookControllers.recoverBook);
router.delete("/deleteF/book/:code", BookControllers.deleteBookF);
router.get("/getAll/book", BookControllers.getAllBooks);

//Clients Routes
router.post("/register/client", ClientControllers.registerClient);
router.put("/delete/client/:code", ClientControllers.deleteClient);
router.put("/update/client/:code", ClientControllers.updateClient);
router.put("/recover/client/:code", ClientControllers.recoverClient);
router.delete("/deleteF/client/:code", ClientControllers.deleteClientF)
router.get("/get/client/:code", ClientControllers.getClient);
router.get("/getAll/client", ClientControllers.getAllClient);

//Donation Routes
router.post("/addBook/donation/:ISBN", DonationControllers.altaLibroDonado);
router.get("/getAllBook/donation", DonationControllers.getAllDonationBooks);

//Loss Routes
router.post("/recover/loss/:idLoan", LossControllers.recoverLostBook);
router.get("/getAllBook/loss", LossControllers.getAllLoss);

//Loans Routes
router.post("/register/loan", LoanControllers.registerLoans);
router.post("/return/loan/:idLoan", LoanControllers.returnLoan);
router.get("/getAll/loan", LoanControllers.getAllLoans);

//Opinions Routes
router.post("/register/opinion", OpinionControllers.registerOpinion);
router.get("/getAll/opinion", OpinionControllers.getAllOpinios);

//Consults Routes
router.post("/register/consult", ConsultControllers.registerConsult);

//Categorys Routes
router.post("/register/category", CategoryControllers.registerCategory);

//Verify Token
router.get("/verify-token", authMiddleware, (req, res) => { res.json({ message: 'Acceso Permitido' })});

//verify Username
router.get("/verify-username/:code", ClientControllers.getUsername);



export default router;