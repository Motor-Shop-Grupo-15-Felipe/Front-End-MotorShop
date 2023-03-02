import { AuthProvider } from "./authContext";
import { CommentsProvider } from "./commentContext";
import { UserProvider } from "./userContext";
import { VehicleProvider } from "./vehicleContext";


const Providers = ({ children }: any) => (
  <AuthProvider>
    <UserProvider>
    
      <VehicleProvider>
        <CommentsProvider>
          {children}
        </CommentsProvider>
      </VehicleProvider>
     
    </UserProvider>
  </AuthProvider>
);

export default Providers;
