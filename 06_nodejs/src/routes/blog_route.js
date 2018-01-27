module.exports = (app, db) => {
  app.post('/blogs', (req, res)=>{
    console.log(res.body);
    res.send('hi post');
  });
  app.get('/blogs', (req, res)=>{
    console.log(res.body);
    res.send('hi get all');
  });
  app.get('/blogs/:id', (req, res)=>{
    let id = req.params.id;
    console.log(res.body);
    res.send('hi get ' + id);
  });
  app.put('/blogs', (req, res)=>{
    console.log(res.body);
    res.send('hi put');
  });
  app.delete('/blogs', (req, res)=>{
    console.log(res.body);
    res.send('hi delete');
  });
}
