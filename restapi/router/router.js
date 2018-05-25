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
		con.query(`update board set hit=hit+1 where idx='${idx}'`)
    })

	//회원가입 처리
	app.post('/member/add',(req,res) =>{
		const id = req.body.id
		const pw = req.body.pw
		const name = req.body.name
		const chk = `select count(*) from member where id='${id}'`
		const sql = `insert into member set id='${id}',pw='${pw}',name='${name}'`
		con.query(chk , (err,results,field) => {
			res.json(results)
			if(results[0]['count(*)'] == 0){
				con.query(sql)
			}
		})
	})
	
	//로그인 처리
	app.post('/member/login',(req,res) =>{
		const id = req.body.id
		const pw = req.body.pw
		const sql = `select * from member where id='${id}' and pw='${pw}'`
		con.query(sql, (err,results,field) => {
			res.json(results)
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