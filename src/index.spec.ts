import { version } from "./index";

describe("index", () => {
    it('has correct version', () => {
        expect(version).toBe("1.0.0");
    })
})