(
    () => {
        type Gender = 'M' | 'F'
        class Person {
            constructor(public name: string, public gender: Gender, public birthdate: Date) {
            }
        }
        const newPerson = new Person("John", 'F', new Date());
        console.log(newPerson);
    }
)();