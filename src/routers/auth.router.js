
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
router.post("/register/book", authMiddleware, BookControllers.registerBook);
router.put("/delete/book/:code", BookControllers.deleteBook);
router.put("/recover/book/:code", authMiddleware, BookControllers.recoverBook);
router.delete("/deleteF/book/:code", authMiddleware, BookControllers.deleteBookF);
router.get("/getAll/book", authMiddleware, BookControllers.getAllBooks);
router.get("/getC/book/:category", BookControllers.getBooksByCategory);

//Clients Routes
router.post("/register/client", ClientControllers.registerClient);
router.put("/delete/client/:code", ClientControllers.deleteClient);
router.put("/update/client/:code", authMiddleware, ClientControllers.updateClient);
router.put("/recover/client/:code", authMiddleware, ClientControllers.recoverClient);
router.delete("/deleteF/client/:code", authMiddleware, ClientControllers.deleteClientF)
router.get("/get/client/:code", ClientControllers.getClient);
router.get("/getAll/client", ClientControllers.getAllClient);
router.get('/verify/user/:token', ClientControllers.verifyAccount);

//Donation Routes
router.post("/addBook/donation/:ISBN", DonationControllers.altaLibroDonado);
router.get("/getAllBook/donation", authMiddleware, DonationControllers.getAllDonationBooks);

//Loss Routes
router.post("/recover/loss/:idLoan", LossControllers.recoverLostBook);
router.get("/getAllBook/loss", authMiddleware, LossControllers.getAllLoss);
router.delete("/deleteBook/loss/:idLoan", LossControllers.deleteLostBook);

//Loans Routes
router.post("/register/loan", authMiddleware, LoanControllers.registerLoans);
router.post("/return/loan/:idLoan", LoanControllers.returnLoan);
router.get("/getAll/loan", authMiddleware, LoanControllers.getAllLoans);

//Opinions Routes
router.post("/register/opinion", OpinionControllers.registerOpinion);
router.get("/getAll/opinion", OpinionControllers.getAllOpinios);

//Consults Routes
router.post("/register/consult", ConsultControllers.registerConsult);
router.get('/statistics', ConsultControllers.getStatistics);

//Categorys Routes
router.post("/register/category", CategoryControllers.registerCategory);

//Verify Token
router.get("/verify-token", authMiddleware, (req, res) => { res.json({ message: 'Acceso Permitido' })});

//verify Username
router.get("/verify-username/:code", ClientControllers.getUsername);



export default router;