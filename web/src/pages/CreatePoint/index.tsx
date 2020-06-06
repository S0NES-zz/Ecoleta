import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import {Map, TileLayer, Marker} from 'react-leaflet';

import './styles.css';

import logo from '../../assets/logo.svg';
import { tileLayer } from 'leaflet';

const CreatePoint = () => {
    return (
      <div id="page-create-point">
        <header>
          <img src={logo} alt="Ecoleta"></img>
          <Link to="/">
            <FiArrowLeft />
            <p> Voltar para home </p>
          </Link>
        </header>

        <form>
          <h1>
            {" "}
            Cadastro do <br /> Ponto de coleta{" "}
          </h1>

          {/* DADOS */}
          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>

            <div className="field">
              <label htmlFor="name">Nome da Entidade</label>
              <input type="text" name="name" id="name" />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="name">Whatsapp</label>
                <input type="text" name="Whatsapp" id="Whatsapp" />
              </div>
            </div>
          </fieldset>

          {/* Endereco */}
          <fieldset>
            <legend>
              <h2>Endereço</h2>
              <span>Selecione o Endereço no mapa</span>
            </legend>
            <Map center={[-23.6053919, -46.596518]} zoom={15}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </Map>
            
            <div className="field-grouup">
              <div className="field">
                <label htmlFor="uf">Estado (UF)</label>
                <select name="uf" id="uf">
                  <option value="0">Selecione uma UF</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="city">Cidade</label>
                <select name="city" id="city">
                  <option value="0">Selecione uma Cidade</option>
                </select>
              </div>
            </div>
          </fieldset>

          {/* Itens de Coleta */}
          <fieldset>
            <legend>
              <h2>Itens de Coleta</h2>
              <span>Selecione um ou mais ítens abaixo</span>
            </legend>
            <ul className="items-grid">
              <li>
                <img
                  src="http://localhost:3333/uploads/lampadas.svg"
                  alt="lampada"
                />
                <span>Lâmpadas</span>
              </li>
              <li>
                <img
                  src="http://localhost:3333/uploads/baterias.svg"
                  alt="baterias"
                />
                <span>Pilhas e baterias</span>
              </li>
              <li>
                <img
                  src="http://localhost:3333/uploads/papeis-papelao.svg"
                  alt="papeis de papelao"
                />
                <span>Papéis e papelão</span>
              </li>
              <li>
                <img
                  src="http://localhost:3333/uploads/eletronicos.svg"
                  alt="eletronicos"
                />
                <span>Resídos Eletrônicos</span>
              </li>
              <li>
                <img
                  src="http://localhost:3333/uploads/organicos.svg"
                  alt="organicos"
                />
                <span>Resídos Orgânicos</span>
              </li>
              <li>
                <img src="http://localhost:3333/uploads/oleo.svg" alt="oleo" />
                <span>Oléo de Cozinha</span>
              </li>
            </ul>
          </fieldset>

          <button type="submit">Cadastrar Ponto de Coleta</button>
        </form>
      </div>
    );
};

export default CreatePoint;