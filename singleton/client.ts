import { Singleton } from './singleton';

export function client() {
    const singleton1 = Singleton.getInstance();
    const singleton2 = Singleton.getInstance();

    if (singleton1 === singleton2) {
        console.log('Singleton works, you have the same instance');
    }
    else {
        console.log('Singleton failed, you have a different instances')
    }
}

client();