import { ArrayUtils } from "./array.utils";

describe('ArrayUtils', () => {

    type MyType = {
        id: number,
        name: string
    }

    const array = [
        {
            id: 1,
            name: 'R'
        },
        {
            id: 2,
            name: 'R'
        },
        {
            id: 3,
            name: 'R'
        }
    ]

    it('should return one element with id = 2', () => {
        expect(ArrayUtils.getBy<MyType, keyof MyType>(array, 'id', 2)?.id).toEqual(2);
    });

    it('should return null when no element found', () => {
        expect(ArrayUtils.getBy<MyType, keyof MyType>(array, 'name', 'L')).toEqual(null);
    });
});