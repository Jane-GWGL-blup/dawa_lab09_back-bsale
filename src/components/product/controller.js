import prisma from "../../db"
import { success, failed } from "../../responses"

export const findAll = async (req, res) => {
    try{
        const product = await prisma.product.findMany()
        return success({ res, data: product})
    }catch(error){
        return failed({ res, error})
    }
}

export const findOne = async (req, res) => {
    try{
        const id = Number(req.params.id)
        const product = await prisma.product.findUnique({
            where: { id },
        })
        return success({ res, data:product})
    }catch(error){
        return failed({ res, error });
    }
}

export const create = async (req, res) => {
    try{
        const body = req.body
        const product = await prisma.product.create({
            data: body,
        })
        return success({ res, data:product , status:201 })
    }catch(error){
        return failed({ res, error })
    }
}

export const update = async (req, res) => {
    try{
        const body = req.body
        const id = Number(req.params.id)
        const product = await prisma.product.update({
            where: { id },
            data: body,
        })
        return success({ res, data:product})
    }catch(error){
        return failed({ res, error })
    }
}

export const remove = async (req, res) => {
    try{
        const id = Number(req.params.id)
        const product = await prisma.product.delete({
            where: { id },
        })
        return success({ res, data:product })
    }catch(error){
        return failed({ res, error })
    }
}