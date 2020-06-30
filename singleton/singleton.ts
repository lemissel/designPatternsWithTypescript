export class Singleton {
    private static instance: Singleton;

    // Intentionally marked to private modificator for prevent direct construction calls with the new operator
    private constructor() { }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}