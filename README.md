# CDB Calculator
Welcome to my demo CDB (Certificate of Deposit) Calculator! 🚀😄
<br/>
<br/>
## 🗞️ Project Description
This repository contains a RESTful API that calculates and serves both the gross and net values of CDB investments, with income tax already applied.
<br/>**important: This is a test/demo project, and shouldn't be used in real scenarios.**
<br/>
## 🔑 Key Features

**RESTful API:** The API provides endpoints to calculate CDB investments, returning both gross and net values. (It also takes into consideration the different tax ranges based on the amount of months to redeem the investment)

**Unit Tests:** The API includes a suite of unit tests to ensure reliability and accuracy in calculations.

**Angular Frontend:** Alongside the API, I've developed an Angular-based frontend solution that interacts seamlessly with the API. It enables users to input investment details and receive instant calculations.

**Frontend Unit Tests:** I've also included a suite of unit tests for the Angular frontend

## :fishsticks: &nbsp;Tech Stack

**API**
   - NET 7
   - xunit
   - Swashbuckle
     
**Frontend**
  - Angular CLI 16.2.3
  - Node 16

# ❔ How to Execute

## API
Before you begin, ensure you have the following prerequisites installed:
- [.NET 7 SDK] https://dotnet.microsoft.com/pt-br/download/dotnet/7.0
- [Visual Studio 2022 (optional but recommended)] https://visualstudio.microsoft.com/downloads/
- [Git] https://git-scm.com/downloads

### Clone the Repository
First, clone the CDB-B3 repository to your local machine using Git:
<pre>
git clone THIS_REPOSITORY_URL
</pre>

### Open the Solution
1. Open Visual Studio 2022.
2. Click on "File" > "Open" > "Project/Solution."
3. Navigate to the cloned repository folder and open the CDB-B3.sln solution file.

### Set CDB-B3 as the Startup Project
Make sure the "CDB-B3" project is set as the startup project:
- Right-click on the "CDB-B3" project in the Solution Explorer.
- Select "Set as Startup Project."

### Build and Run
Now, build and run the CDB-B3 WebAPI project:

- Press F5 or click on the "Start" button in Visual Studio's toolbar.
- The API should start, and you'll see output in the console indicating that the application is running
- If everything went as expected, Swagger documentation will automatically be opened

### Running Tests
To run unit tests for the project, use the built-in test runner in Visual Studio or run the following command from the project directory:
<pre>
dotnet test
</pre>

## FRONTEND 
- Make sure you have Node.js installed on your system.
- Install Angular CLI globally by running the following command in your terminal:

<pre>
npm install -g @angular/cli
</pre>

Through your terminal navigate to Angular directory
  <pre>cd CBD-B3.Frontend</pre>

Inside the CBD-B3.Frontend directory, install the project dependencies by running:
  <pre>npm install</pre>
Once the dependencies are installed, you can start the Angular development server by running:
  <pre>ng serve</pre>

### Running Tests
To run unit tests for the project, run the following command:
<pre>
ng test
</pre>

### Access the Application:
After successfully starting the development server, open your web browser and navigate to the URL shown at the terminal. You should see your Angular application running.

## Test Coverage
### API
![image](https://github.com/DejeanEcheverrya/cdb-b3/assets/145882794/6db150ea-aa09-4567-acd0-347f0ae281b7)

### Frontend
![image](https://github.com/DejeanEcheverrya/cdb-b3/assets/145882794/193349e2-4c80-4328-92e2-c9821eefc57f)


## Final considerations
- For the CDB Calculation I decided to implement the Strategy Design Pattern as an example of how we could get flexibility in selecting the appropriate calculation strategy.
- It makes use of Dependency Injection to choose the implementation and its dependencies.
- Just for the sake of this test, we can find two hardcoded taxes (CDI and TB), they would, ideally, come from somewhere else.
- The project follows the Single Responsibility Principle (We have classes with single responsibilities such as models, controllers, services, etc.) as well as the Dependency Inversion Principle (Our controller depends on an abstraction instead of a concrete implementation, that makes it easy to replace the implementation)
- Method names uses PascalCase, variables uses camelCase
