```
> sls --version
Framework Core: 3.21.0
Plugin: 6.2.2
SDK: 4.3.2
```

# Reproduction Steps

`
npm install
sls api:invoke local --function hello
`

### when param is set to `${schema.LambdaRoleArn}`

```
Error:
The variable "${schema.LambdaRoleArn}" cannot be resolved: the referenced output does not exist.
```

### when param is set to `${schema.LambdaRoleArn, ''}`

Result - Value is `${schema.LambdaRoleArn, ''}`
```
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Value: ${schema.LambdaRoleArn, ''} and param is Hello World\",\n  \"input\": \"\"\n}"
}
```

Expected - Value is empty
```
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Value: and param is Hello World\",\n  \"input\": \"\"\n}"
}
```
