function analyzePayroll() {
    
    const employeeData = [
        { name: "Employee 1", hours: [8, 9, 8, 10, 8, 6, 0] }, 
        { name: "Employee 2", hours: [8, 8, 8, 8, 8, 8, 8] },   
        { name: "Employee 3", hours: [12, 12, 12, 12, 10, 8, 0] }, 
        { name: "Employee 4", hours: [8, 8, 8, 8, 8, 0, 0] },  
        { name: "Employee 5", hours: [10, 10, 10, 10, 10, 8, 4] } 
    ];

    const NORMAL_HOURS_PER_DAY = 8;
    const OVERTIME_RATE = 25000;

    let totalCompanyOvertime = 0;
    let maxOvertimeHours = -1;
    let maxOvertimeEmployee = "";
    let highOvertimeEmployees = [];

    console.log("=== Employee Weekly Summary ===");


    for (let i = 0; i < employeeData.length; i++) {
        let emp = employeeData[i];
        let totalWeeklyHours = 0;
        let totalWeeklyOvertime = 0;

        for (let d = 0; d < emp.hours.length; d++) {
            let dailyHours = emp.hours[d];
            totalWeeklyHours += dailyHours;

            
            if (dailyHours > NORMAL_HOURS_PER_DAY) {
                totalWeeklyOvertime += (dailyHours - NORMAL_HOURS_PER_DAY);
            }
        }

        let overtimePay = totalWeeklyOvertime * OVERTIME_RATE;
        totalCompanyOvertime += totalWeeklyOvertime;

        console.log(`${emp.name} | Weekly Hours: ${totalWeeklyHours} | Overtime: ${totalWeeklyOvertime} hrs | Overtime Pay: Rp${overtimePay.toLocaleString('id-ID')}`);

        
        if (totalWeeklyOvertime > maxOvertimeHours) {
            maxOvertimeHours = totalWeeklyOvertime;
            maxOvertimeEmployee = emp.name;
        }

        if (totalWeeklyOvertime > 10) {
            highOvertimeEmployees.push(emp.name);
        }
    }

    console.log("\n=== Company Analytical Insights ===");
    console.log(`Total Company Overtime: ${totalCompanyOvertime} hours`);
    console.log(`Employee with Most Overtime: ${maxOvertimeEmployee} (${maxOvertimeHours} hours)`);
    console.log(`Employees exceeding 10 hours of overtime: ${highOvertimeEmployees.length > 0 ? highOvertimeEmployees.join(', ') : "None"}`);
}

analyzePayroll();