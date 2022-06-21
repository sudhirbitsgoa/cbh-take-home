# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. Facilities should be able to give Custom ID to each Agent. And each Agent can be working with multiple facilities. We should introduce a new table ``` facility_agent_custom_name ```
which has agentId, facilityId and customName keys. Add a composite index on agentId and facilityId so that we maintain unique custom name for a given pair of Facility and agent
2. In generateReport we will group by agentId and do aggregations on the hours and fee. During this we can replace agentId with custom Name from the ``` facility_agent_custom_name ``` table. The pdf will have the custom Name.
3. The action items are defining table and extend generateReport function to get custom name. Write unit test for generateReport function. 
4. Based on action items the estimates can be 1. defin table 5 hours 2. extend generateReport 8 hours 3. Unit test generateReport 4 hours.