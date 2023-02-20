import { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pesan: '',
            jumlah: 0,
            tampil: true
        }

        this.pilihPesanan = this.pilihPesanan.bind(this);
        this.nasipadang = this.nasipadang.bind(this);
        this.sate = this.sate.bind(this);
        this.soto = this.soto.bind(this);
        this.uduk = this.uduk.bind(this);
        this.Kuning = this.Kuning.bind(this);
        this.batal = this.batal.bind(this);
    }

    pilihPesanan(value, e) {
        this.setState({ [value]: e.target.value, tampil: true });
    }

    nasipadang() {
        this.setState({
            pesan: 'Nasi Padang',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }

    sate() {
        this.setState({
            pesan: 'Sate',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }

    soto() {
        this.setState({
            pesan: 'Soto Ayam Lamongan',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }

    uduk() {
        this.setState({
            pesan: 'Nasi Uduk',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }

    Kuning() {
        this.setState({
            pesan: 'Nasi Kuning',
            jumlah: this.state.jumlah + 1,
            tampil: true
        })
    }

    batal() {
        this.setState({
            pesan: "",
            jumlah: 0,
            tampil: false
        })
    }

    render() {
        return (
            <div>
                <h3>Daftar makanan yang kami sediakan: </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ListMakanan img="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                                <center>
                                    <button
                                        onClick={this.nasipadang}
                                    >
                                        Pesan Sekarang
                                    </button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan
                                    img="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                                <center>
                                    <button
                                        onClick={this.sate}
                                    >
                                        Pesan Sekarang
                                    </button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan img="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                                <center>
                                    <button
                                        onClick={this.soto}
                                    >
                                        Pesan Sekarang
                                    </button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan img="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                                <center>
                                    <button
                                        onClick={this.uduk}
                                    >
                                        Pesan Sekarang
                                    </button>
                                </center>
                            </td>
                            <td>
                                <ListMakanan img="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                                <center>
                                    <button
                                        onClick={this.Kuning}
                                    >
                                        Pesan Sekarang
                                    </button>
                                </center>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br />
                <input type='text'
                    placeholder="Masukkan pesanan anda"
                    onChange={e => this.pilihPesanan('pesan', e)}
                />
                <input type='number'
                    placeholder="Jumlah pesanan"
                    onChange={e => this.pilihPesanan('jumlah', e)}
                />

                <button onClick={this.batal}>Batalkan semua pesanan</button>

                {
                    this.state.tampil === true ? (
                        <div>
                            <h3>Pesanan anda : {this.state.pesan}</h3>
                            <h4>Jumlah pesanan : {this.state.jumlah}</h4>
                        </div>
                    ) : (
                        <div>
                            <center>Anda Belum Memesan</center>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default MenuMakanan;