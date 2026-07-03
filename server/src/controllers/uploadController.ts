import { Request, Response } from "express";

export const uploadPDF = (
    req: Request,
    res: Response
) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No PDF uploaded"
        });
    }

    res.json({
        success: true,
        filename: req.file.originalname,
        storedAs: req.file.filename
    });
};