// Type definitions for react-native-nfc-manager
// Project: https://github.com/whitedogg13/react-native-nfc-manager
// Definitions by: April Ayres <april.ayres@papercut.com> and Paul Huynh <paul.huynh@papercut.com>

declare module 'react-native-nfc-manager' {

	export interface NdefRecord {
		id?: number[];
		tnf: number;
		type: number[];
		payload: any[];
	}

	export interface ParseUriResult {
		uri: string;
	}

	export interface StartOptions {
		onSessionClosedIOS(): void;
	}

	export interface TagEvent {
		ndefMessage: NdefRecord[];
		maxSize: number;
		type: string;
		techTypes: string[];
		id: number[];
	}

	interface NfcManager {

		start(options?: StartOptions): Promise<any>;

		stop(): void;

		isSupported(): Promise<boolean>;

		/** [ANDROID ONLY] */
		isEnabled(): Promise<boolean>;

		/** [ANDROID ONLY] */
		goToNfcSetting(): Promise<any>;

		/** [ANDROID ONLY] */
		getLaunchTagEvent(): Promise<TagEvent | null>;

		/**
		 * Start to listen to ANY NFC Tags
		 * @param listener The callback function when a tag is found.
		 * @param alertMessage [iOS ONLY] Message displayed when NFC Scanning popup appears.
		 * @param invalidateAfterFirstRead [iOS ONLY] When set to true, will auto-dismiss the NFC Scanning popup after scanning.
		 */
		registerTagEvent(
			listener: (tag: TagEvent) => void,
			alertMessage?: string,
			invalidateAfterFirstRead?: boolean
		): Promise<any>;

		unregisterTagEvent(): Promise<any>;

	}
	const nfcManager: NfcManager;
	export default nfcManager;

	export namespace NdefParser {
		function parseUri(ndef: NdefRecord): ParseUriResult;
	}
}
