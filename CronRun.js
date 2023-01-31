const cron=require('node-cron');
const shell=require('shelljs');
const serv=require('Server');

cron.schedule('*/2 * * * *', () => {
    console.log('running a task every two minutes');

if(shell.exec('node Server.js')!==0,()=>{
    console.log('node run Server.js');
})
    
  if(shell.exec('dir')!==0,()=>{
    console.log("something went wrong")
  });

  });
