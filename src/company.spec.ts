import {allOf, assertThat, equalTo, greaterThan, greaterThanOrEqualTo, lessThanOrEqualTo} from "hamjest";
import {Company} from "./company";
import {Employee} from "./employee";


function approximateTo(value: number, threshhold: number) {
    return allOf(
        greaterThanOrEqualTo(value - threshhold),
        lessThanOrEqualTo(value + threshhold)
    );
}

describe('Company', () => {
    let company: Company;
    beforeEach(() => {
        company = new Company("Megadyne, Inc.");
    })

    it('companyRename', () => {
        const proposedName = "Cybertron Unlimited, Ltd.";
        company.setName(proposedName);
        company.getName()
    })

    it('leadingTrailingSpacesRemovedFromEmployeeName', () => {
        const employee1 = new Employee("001",    " Bob", 100_000.00);
        assertThat(employee1.getName(), equalTo("Bob"));
        const employee2 = new Employee("002", "Alice  ", 100_000.00);
        assertThat(employee2.getName(), equalTo("Alice"));
    })

    it('employeeAdded', () => {
        company.addEmployee(new Employee("123", "Dave", 100_000.00));
        assertThat(company.numberOfEmployees(), greaterThan(0));

        company.addEmployee(new Employee("456", "Bob", 50_000.00));
        assertThat(company.numberOfEmployees(), greaterThan(0));
    })

    it('everybodyGetsRaise', () => {
        const increaseBy = 0.1; // everybody's salary should go up by this fraction

        const davesOriginalSalary = 100_000.00;

        company.addEmployee(new Employee("123", "Dave",  davesOriginalSalary));
        company.addEmployee(new Employee("456", "Alice", 120_000.00));
        company.addEmployee(new Employee("789", "Bob",   110_000.00));

        company.everybodyGetsRaiseBy(increaseBy);

        const dave = company.findEmployeeById("123");

        assertThat(dave.getSalary(),
            approximateTo(davesOriginalSalary * increaseBy, 0.0001))

    })

    it('findEmployeeById', () => {
        company.addEmployee(new Employee("123", "Dave",  100_000.00));
        company.addEmployee(new Employee("456", "Alice", 100_000.00));
        company.addEmployee(new Employee("789", "Bob",   100_000.00));

        const hopefullyDave = company.findEmployeeById("123");
        const hopefullyNoOne = company.findEmployeeById("999");
    })

    it('employeeNameChanged', () => {
        company.addEmployee(new Employee("123", "Dave",  100_000.00));
        company.addEmployee(new Employee("456", "Alice", 100_000.00));
        company.addEmployee(new Employee("789", "Bob",   100_000.00));

        let employee = company.findEmployeeById("123");
        employee.setName("Tommy Lee");
        employee = company.findEmployeeById("123");
        console.log(employee.getName() === ("Tommy Lee") ? "PASSED" : "FAILED");
    })
});