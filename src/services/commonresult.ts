export function processResult(resultData: any) {
    if (resultData.data.applicantdateofbirth) {
        resultData.data.applicantdateofbirth = new Date((resultData.data.applicantdateofbirth as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.dateofBirth) {
        resultData.data.dateofBirth = new Date((resultData.data.dateofBirth as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.physicalExamExpirationDate) {
        resultData.data.physicalExamExpirationDate = new Date((resultData.data.physicalExamExpirationDate as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.employmentHistoryfrom) {
        resultData.data.employmentHistoryfrom = new Date((resultData.data.employmentHistoryfrom as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.employmentHistoryTo) {
        resultData.data.employmentHistoryTo = new Date((resultData.data.employmentHistoryTo as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.experienceToDate) {
        resultData.data.experienceToDate = new Date((resultData.data.experienceToDate as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.experienceFromDate) {
        resultData.data.experienceFromDate = new Date((resultData.data.experienceFromDate as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.dateOfAccident) {
        resultData.data.dateOfAccident = new Date((resultData.data.dateOfAccident as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.dateOfViolation) {
        resultData.data.dateOfViolation = new Date((resultData.data.dateOfViolation as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.lastYearAddressfrom) {
        resultData.data.lastYearAddressfrom = new Date((resultData.data.lastYearAddressfrom as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.lastYearAddressTo) {
        resultData.data.lastYearAddressTo = new Date((resultData.data.lastYearAddressTo as any).$date).toISOString().split('T')[0];
    }
    if (resultData.data.employeeDate) {
        resultData.data.employeeDate = new Date((resultData.data.employeeDate as any).$date).toISOString().split('T')[0];
    }
    
    
}