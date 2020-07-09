echo "Please input your password."
sfdx force:auth:web:login -d -a myhuborg
sfdx force:source:push
sfdx force:user:permset:assign -n recipes
sfdx force:data:tree:import -p ../data/data-plan.json
sfdx force:org:open