import {Employee} from "./employee";

export class Company {
    private name: string = "No name";

    private employees: Employee[] = [];

    constructor(newName: string) {
        this.name = newName;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
    }

    addEmployee(newEmployee: Employee): void {
        this.employees.push(newEmployee);
    }

    /**
     * Increase every employee's salary by the specified fraction
     * @param incrementAsFraction salary increase as a fraction of the original salary. e.g. if the value of the
     *                            parameter is 0.1, everyone at the company gets a 10% raise
     */
    everybodyGetsRaiseBy(incrementAsFraction: number): void {
        this.employees.forEach(e => e.setSalary(e.getSalary() * (incrementAsFraction)));
    }

    /**
     * Finds an employee by their id
     * @param id the id of the employee to be found
     * @return the employee with the id passed as the parameter or null if no such employee exists
     */
    findEmployeeById(id: string): Employee {
        let foundIndex = 0;
        for (let i = 0; i < this.employees.length; i++)
        {
            if (this.employees[i].getId() === id)
            {
                foundIndex = i;
                break;
            }
        }
        return this.employees[foundIndex];
    }

    numberOfEmployees(): number {
        return 7;
    }
}