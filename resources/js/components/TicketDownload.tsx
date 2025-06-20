import React from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface TicketDownloadProps {
    agency: any;
    plan: any;
    details: any;
    seats: string[];
    onBack: () => void;
}
import { Link } from '@inertiajs/react';

const handleDownload = () => {
    // Pas besoin de window.location.href
};

// Dans le JSX :
<Link href={route('ticket.download')} download>
    <Button className="bg-green-500 hover:bg-green-600">
        <Download className="mr-2 h-4 w-4" />
        Télécharger le billet
    </Button>
</Link>
const TicketDownload: React.FC<TicketDownloadProps> = ({ agency, plan, details, seats, onBack }) => {
    const handleDownload = () => {
        // Simuler le téléchargement (remplacez par une requête réelle si nécessaire)
        const ticketUrl = '/ticket/download'; // Remplacez par l'URL réelle
        window.location.href = ticketUrl;
    };

    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Votre billet est prêt !</h2>
            <div className="space-y-4">
                <p className="text-gray-700">
                    Votre réservation a été confirmée avec succès. Vous pouvez maintenant télécharger votre billet.
                </p>
                <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-semibold">Résumé de la réservation</h3>
                    <p><strong>Agence :</strong> {agency?.name || 'Non spécifié'}</p>
                    <p><strong>Plan :</strong> {plan?.name || 'Non spécifié'}</p>
                    <p><strong>Sièges :</strong> {seats.join(', ') || 'Aucun'}</p>
                    <p><strong>Détails :</strong> {details?.date || 'Non spécifié'}</p>
                </div>
                <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={onBack}>
                        Retour
                    </Button>
                    <Button className="bg-green-500 hover:bg-green-600" onClick={handleDownload}>
                        <Download className="mr-2 h-4 w-4" />
                        Télécharger le billet
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TicketDownload;