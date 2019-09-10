import AWS from "aws-sdk";

AWS.config.update({
    region: "ap-south-1",
    endpoint: "http://localhost:8000"
});

const dynamodb = new AWS.DynamoDB();

var params = {
    TableName: "Customer",
    KeySchema: [
        { AttributeName: "id", KeyType: "HASH" }
    ],
    AttributeDefinitions: [
        { AttributeName: "id", AttributeType: "S" }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
    }
};


dynamodb.createTable(params, (error, data) => {
    if (error) {
        console.log(`${error.stack}`);
    } else {
        console.log(`${JSON.stringify(data)}`);
    }
});
