import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Users, ShoppingBag } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Rocket className="h-16 w-16 text-primary-500" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Emprendedores
            <span className="text-primary-500"> Social Network</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            La primera red social que conecta emprendedores con compradores 
            de manera visual, emocional e interactiva
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/register" className="btn-primary text-lg px-8 py-3">
              Comenzar Gratis
            </Link>
            <Link to="/login" className="btn-secondary text-lg px-8 py-3">
              Iniciar Sesión
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Para Emprendedores</h3>
              <p className="text-gray-600">Muestra tus productos, gestiona tu negocio y conecta con clientes reales</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <ShoppingBag className="h-12 w-12 text-secondary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Para Compradores</h3>
              <p className="text-gray-600">Descubre productos únicos y apoya emprendimientos locales</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Rocket className="h-12 w-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crecimiento</h3>
              <p className="text-gray-600">Estadísticas, análisis y herramientas para hacer crecer tu emprendimiento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;