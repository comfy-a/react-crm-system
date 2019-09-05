import AWS from "aws-sdk";

AWS.config.update({
    region: "ap-south-1",
    endpoint: "http://localhost:8000"
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const getCustomers = async () => {
    var params = {
        TableName: "Customer"
    };

    return await new Promise((resolve, reject) => {
        dynamoDb.scan(params, (error, data) => {
            if (error) {
                console.log(`${error.stack}`);
                resolve({
                    statusCode: 400,
                    error: `${error.stack}`
                });

            } else {
                console.log(`${JSON.stringify(data)}`);
                resolve({
                    statusCode: 200,
                    data: data.Items
                });
            }
        });
    });
};