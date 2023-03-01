import { AuthProvider } from "./authContext";
import { CommentsProvider } from "./commentContext";
import { UserProvider } from "./userContext";
import { VehicleProvider } from "./vehicleContext";
import ADSProvider from "./ADSContext"

const Providers = ({ children }: any) => (
  <AuthProvider>
    <UserProvider>
    <ADSProvider>
      <VehicleProvider>
        <CommentsProvider>
          {children}
        </CommentsProvider>
      </VehicleProvider>
      </ADSProvider>
    </UserProvider>
  </AuthProvider>
);

export default Providers;
