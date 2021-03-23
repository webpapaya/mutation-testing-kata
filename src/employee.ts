export class Employee {
    private id: string;
    private name!: string;
    private salary!: number;

    constructor(newId: string, newName: string, newSalary: number) {
        this.id = newId;
        this.setName(newName);
        this.setSalary(newSalary);
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    /**
     * Set the employee name after removing leading and trailing spaces, which could be left by upstream system
     * @param newName the new name for the employee, possibly with leading and trailing white space to be removed
     */
    setName(newName: string): void {
        this.name = newName.replace(/\s/g, "");
    }

    getSalary(): number {
        return this.salary;
    }

    setSalary(newSalary: number): void {
        this.salary = newSalary;
    }
}