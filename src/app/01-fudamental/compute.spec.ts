import { Subscriber } from "rxjs";
import { compute } from './compute';

describe('compute', () => {
    it('should be return 0 if input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    })

    it('should be return 1 if input is ', () => {
        const result = compute(1);
        expect(result).toBe(2);
    })
})