const mysql = require('mysql')
const con = mysql.createConnection(require('../config/dbconfig.js'))

con.connect((err) => {
	if(err){
		console.log(err)
		return
	} else{
		console.log('mysql is connected')
	}
})

module.exports = (app,fs) =>{

	//게시글 리스트
	app.get('/board',(req,res) =>{
		const sql = 'select * from board order by date desc'
		con.query(sql,(err,results) => {
			res.json(results)
		})
	})

	//글보기 페이지
	app.get('/board/view/:idx',(req,res) =>{
		const idx = req.params.idx
		const sql = `select * from board where idx='${idx}'`
		con.query(sql,(err,results) =>{
			res.json(results)
		})
  })
  	//로그인 페이지
	app.get('/login',(req,res) =>{
		res.render("login",{
			title:"로그인 페이지",
		})
  	})

	//회원가입 페이지
	app.get('/join',(req,res) =>{
		res.render("join",{
		title:"회원가입 페이지"
		})
	})

	//회원가입 처리
	app.post('/join',(req,res) =>{
		const mb_id = req.body.mb_id
		const mb_pw = req.body.mb_pw
		const mb_name = req.body.mb_name
		const sql = `select count(*) from member where id='${mb_id}'`
		con.query(sql , (err,results,field) => {
			if (results[0]['count(*)'] > 0){
				res.send('<script>alert("중복된 아이디 입니다.")</script>')
				return false
			} else{
				const ins = `insert into member SET id='${mb_id}',pw='${mb_pw}', name='${mb_name}'`
				con.query(ins,(err,results,field) => {
					res.send('<script>alert("회원가입이 완료되었습니다.")</script>')
				})
			}
		})
	})
	
	//로그인 처리
	app.post('/login',(req,res) =>{
		const mb_id = req.body.mb_id
		const mb_pw = req.body.mb_pw
		const sql = `select * from member where id='${mb_id}' and pw='${mb_pw}'`
		con.query(sql, (err,results,field) => {
			if (results[0] == undefined) {
				res.send('<script>alert("아이디 또는 비밀번호가 일치하지 않습니다.")</script>')
				return false
			} else{
				sess = req.body
				sess.username = results[0]['name']
				res.send('<script>alert("로그인 되었습니다.")</script>')
			}
		})
	})

	//글작성 처리
	app.post('/board/add',(req,res) =>{
		const writer = req.body.writer
		const subject = req.body.subject
		const content = req.body.content
		const sql = `insert into board set writer='${writer}',subject='${subject}',content='${content}',date=now(),change_date=now()`
		console.log(sql)
		con.query(sql,(err,results)=>{
			res.json(results)
		})
	})

	//글수정
	app.get('/board/update/:idx',(req,res) => {
		const idx = req.params.idx
		const sql = `select * from board where idx='${idx}'`
		con.query(sql,(err,results) =>{
			res.json(results)
		}) 
	})

	//글수정 처리
	app.post('/board/update',(req,res) => {
		const writer = req.body.writer
		const subject = req.body.subject
		const content = req.body.content
		const idx = req.body.idx
		const sql = `UPDATE board set writer='${writer}',subject='${subject}',content='${content}',change_date=now() where idx='${idx}'`
		console.log(sql)
		con.query(sql,(err,results) => {
			res.json(results)
		})
	})

	//글삭제 처리
	app.post('/board/delete',(req,res) => {
		const idx = req.body.idx
		const sql = `delete from board where idx='${idx}'`
		console.log(sql)
		con.query(sql,(err,results) => {
			res.json(results)
		})
	})

}