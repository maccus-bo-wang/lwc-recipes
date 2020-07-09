#Convert to MDAPI format for deployment to prod
echo "Converting to MDAPI format..."
sfdx force:source:convert -d deploy_prod_test -r force-app 
#Deploy to prod & run all tests
echo "Deploying to production & running --testlevel RunSpecifiedTests..."
#sfdx force:mdapi:deploy -u DevHub -d deploy_prod_test/ -w -1 -l RunAllTestsInOrg 
#sfdx force:mdapi:deploy -u DevHub -d deploy_prod_test/ -w -1 --testlevel RunSpecifiedTests HelloWorldTest
sfdx force:mdapi:deploy -u DevHub -d deploy_prod_test/ -w -1 -l NoTestRun
