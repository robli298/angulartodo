
export class ArrayUtils {
    public static getBy<T, P extends keyof T>(model: T[], prop: P, value: T[P]): T | null {
        return model.filter(item => item[prop] === value)[0] || null;
    }
}