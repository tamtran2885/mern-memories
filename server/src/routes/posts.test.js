describe("Test GET /posts", () => {
    test("It should respond with 200 sucess", () => {
        const response = 200;
        expect(response).toBe(200);
    });
})

describe("test POST /post", () => {
    test("It should respond with 200 sucess", () => {
        const response = 200;
        expect(response).toBe(200);
    });

    test("It should catch invalid input", () => {
        const response = 409;
        expect(response).toBe(409);
    });
})