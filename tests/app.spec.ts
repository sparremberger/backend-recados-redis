import request from "supertest";
import app from "../app";
import recadoRoutes from "../routes/recadoRoute";
import express, { Router } from "express";
import { Recado } from "../db/entities/recados.entities";
import RecadosRepository from "../db/repositories/recados.repository";
import IORedis from "ioredis";

jest.mock("ioredis");

const makeRecadoDB = async (): Promise<Recado> =>
    Recado.create({
        recado: "any_recado",
        detalhes: "any_detalhes",
        uid: "any_uid",
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
    }).save();

describe("GET /", () => {
    beforeAll(async () => {
        //app.use(express.json());
        //app.use("/api", recadoRoutes);
    });

    beforeEach(async () => {
        //await Recado.clear();

        jest.resetAllMocks();
    });
    describe("ao receber um get no caminho /", () => {
        test("deve receber status 200", async () => {
            const response = await request(app).get("/").send({});
            console.log(response);
            expect(response.statusCode).toBe(200);
        });
    });

    describe("ao receber um get no caminho /api/recados", () => {
        test("deve receber status 200", async () => {
            //const recado = await makeRecadoDB();
            jest.spyOn(IORedis.prototype, "get").mockResolvedValue(null);
            const response = await request(app).get("/api/recados").send();
            console.log(response);
            expect(response.statusCode).toBe(200);
        });
    });
});
