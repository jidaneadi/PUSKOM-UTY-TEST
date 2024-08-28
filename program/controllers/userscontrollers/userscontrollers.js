const { Users } = require("../../models");
const jwt = require("jsonwebtoken");
const enkripsi = require("bcrypt");
const Validator = require("fastest-validator");
const v = new Validator();

const Register = async (req, res) => {
  const schema = {
    fullname: "string | empty=false",
    email: "string | empty=false",
    password: "string | min=8",
  };

  const validasi = v.validate(req.body, schema);
  if (validasi.length) {
    return res.status(400).json({ msg: validasi });
  }

  if (req.body.fullname === "") {
    return res
      .status(400)
      .json({ status: "error", msg: "Nama tidak boleh kosong!" });
  }

  if (req.body.email === "") {
    return res
      .status(400)
      .json({ status: "error", msg: "Email tidak boleh kosong!" });
  }

  if (req.body.password === "") {
    return res
      .status(400)
      .json({ status: "error", msg: "Password tidak boleh kosong!" });
  }

  const cek = await Users.findOne({
    where: { email: req.body.email },
  });

  if (cek) {
    return res.status(400).json({
      status: "error",
      message: "Email sudah digunakan",
    });
  }

  const newPass = await enkripsi.hash(req.body.password, 10);

  const fullname = req.body.fullname;

  const tokens = jwt.sign({ fullname }, process.env.ACCES_KEY, {
    expiresIn: "360s",
  });

  const data = {
    name: req.body.fullname,
    email: req.body.email,
    password: newPass,
    remember_token: tokens.substring(0,99),
  };
  const createUsers = await Users.create(data);

  return res.status(200).json({
    status: true,
    message: "Sukses register account",
    result: {
      token: tokens,
      user: {
        id: createUsers.id,
        name: createUsers.name,
        email: createUsers.email,
        role: "user",
        register_at: createUsers.createdAt,
      },
    },
  });
};

const Login = async (req, res) => {
  const schema = {
    email: "string | empty:false",
    password: "string | empty:false | min : 8",
  };

  const validation = v.validate(req.body, schema);

  if (validation.lenght) {
    return res.status(400).json({
      msg: validation,
    });
  }

  const cek = await Users.findOne({
    where: { email: req.body.email },
  });

  if (!cek) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
    });
  }

  if(cek.type=1){
    cek.type="admin"
  }else{
    cek.type="user"
  }

  const invalidPassword = await enkripsi.compare(req.body.password, cek.password);

    if (!invalidPassword){
        return res.status(200).json({
            status: 'error',
            message: 'User not foundd'
        });
    }


  const id = cek.id;
  const name = cek.name;
  const role = cek.type;
  const email = cek.email;
  const regis = cek.createdAt

  const token = jwt.sign({ name }, process.env.ACCES_KEY, {
    expiresIn: "360s",
  });

  return res.status(200).json({
    status: "succes",
    message: "Login sukses!",
    result: {
      token: token,
      user: {
        id: id,
        name: name,
        email:email,
        role: role,
        register_at:regis
      },
    },
  });
};
module.exports = { Register, Login };
