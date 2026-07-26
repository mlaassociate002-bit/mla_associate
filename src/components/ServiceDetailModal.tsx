import React from 'react';
import { Service } from '../types';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { Icon } from './Icon';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenConsultation }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#0B192C] border border-amber-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
            <Icon name={service.iconName} className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
              {service.category} Service
            </span>
            <h3 className="text-2xl font-bold font-serif text-white mt-1">{service.title}</h3>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-6 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
          {service.fullDescription}
        </p>

        {/* Key Features & Workflow */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Key Features & Operating Protocols:</h4>
            <div className="space-y-2">
              {service.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start space-x-2.5 p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">Institutional Benefits:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.benefits.map((ben, i) => (
                <div key={i} className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300 text-center font-medium">
                  • {ben}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400 flex items-center">
            <Award className="w-4 h-4 text-amber-400 mr-1.5" /> 100% DRA & RBI Code Compliant
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
