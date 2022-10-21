import { Router } from "express"
import * as Controller from "./controller"

const productRouter = Router()

productRouter.get("/", Controller.findAll);
productRouter.get("/:id", Controller.findOne);
productRouter.post("/", Controller.create);
productRouter.put("/:id", Controller.update);
productRouter.delete("/:id", Controller.remove);

export default productRouter;