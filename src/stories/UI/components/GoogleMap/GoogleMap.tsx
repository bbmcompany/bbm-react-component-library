import './google-map.scss'
import {GoogleMap, withScriptjs, withGoogleMap} from 'react-google-maps';
import {useLoadScript} from '@react-google-maps/api'

interface C3GoogleMapProps {
    lat?: number,
    lng?: number,
    className?: string,
}

export const C3GoogleMap = ({
                                lat = 39.928410,
                                lng = 32.834961,
                                className = ' ',
                                ...props
                            }: C3GoogleMapProps) => {

    let variantClasses = '';
    for (const [key, value] of Object.entries(props)) {
        if (value) {
            variantClasses += ` bbm-rcl-google-map--${value}`;
        }
    }

    function Map() {
        return (
            <GoogleMap
                defaultZoom={13}
                defaultCenter={{lat: lat, lng: lng}}
            />
        )
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: 'AIzaSyAKCT6m2uuLktk-Fvy-UIIL_KDbpvJYO40',
        libraries: ['places'],
    });
    return (
        <div className={['bbm-rcl-google-map', variantClasses, className].join(' ')}>
            {isLoaded && <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAKCT6m2uuLktk-Fvy-UIIL_KDbpvJYO40`}
              loadingElement={<div style={{height: '100%'}}/>}
              containerElement={<div style={{height: '100%'}}/>}
              mapElement={<div style={{height: '100%'}}/>}
            />}
        </div>
    )
}