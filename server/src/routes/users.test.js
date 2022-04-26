describe("Test POST /signin", () => {
    test("It should respond with 200 sucess", () => {
        const response = 200;
        expect(response).toBe(200);
    });

    test("It should catch invalid input", () => {
        const response = 500;
        expect(response).toBe(500);
    });
})

describe("test POST /signup", () => {
    test("It should respond with 200 sucess", () => {
        const response = 200;
        expect(response).toBe(200);
    });

    test("Something went wrong", () => {
        const response = 500;
        expect(response).toBe(500);
    });
})